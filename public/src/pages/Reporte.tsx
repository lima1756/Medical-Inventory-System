import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Griddle, { plugins, RowDefinition, ColumnDefinition, selectors, actions } from 'griddle-react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { createSelector } from 'reselect';
import withHandlers from 'recompose/withHandlers';
import axios from 'axios';


function Reporte() {
    const [data, setData] = useState<Array<any>>([]);

    useEffect(() => {
        axios.get("/report").then(res => {
            setData(res.data.map((data: any) => {
                return {
                    date: new Date(data.date).toString(),
                    nombre: data.object.nombre,
                    type: data.type,
                    barras: data.object.codigo_barras ? data.object.codigo_barras : "",
                    action: data.action,
                    reason: data.reason,
                }
            }));
        }).catch(err => {
            console.log(err);
        })
    }, [])

    const styleConfig = {
        icons: {
            TableHeadingCell: {
                sortDescendingIcon: '▼',
                sortAscendingIcon: '▲',
            },
        },
        classNames: {
            Row: 'row-class',
            Table: 'table-striped, table',
            SettingsToggle: 'btn btn-outline-secondary',
            Filter: "form-control"
        },
        styles: {
            Filter: { fontSize: 18, marginBottom: "1rem", marginTop: "1rem" },
            Settings: { marginTop: "1rem", marginBottom: ".3rem" }
        },
    };

    const sortProperties = [
        { id: 'date', sortAscending: false }
    ];

    const columnChooser =
        compose(
            connect(
                (state) => ({
                    columns: createSelector(
                        selectors.sortedColumnPropertiesSelector,
                        (colMap: any) => {
                            const columns = colMap.valueSeq().toJS();
                            return columns.filter((c: any) => !c.isMetadata);
                        }
                    )(state),
                }),
                {
                    toggleColumn: actions.toggleColumn
                }
            ),
            withHandlers({
                onToggle: (obj: any) => (event: any) => {
                    obj.toggleColumn(event.target.name)
                }
            })
        )((obj: any) => {
            return (
                <div>
                    {Object.keys(obj.columns).map(c =>
                        <div className="form-check form-check-inline" key={obj.columns[c].id}>
                            <input className="form-check-input"
                                type="checkbox"
                                id={obj.columns[c].id}
                                name={obj.columns[c].id}
                                defaultChecked={obj.columns[c].visible !== false}
                                onChange={obj.onToggle}
                            />
                            <label className="form-check-label" htmlFor={obj.columns[c].id}>{obj.columns[c].title || obj.columns[c].id}</label>
                        </div>
                    )}
                </div>
            )
        });

    const pageSizeSettings = (settings: any) =>
        compose(
            connect(
                (state) => ({
                    pageSize: selectors.pageSizeSelector(state),
                }),
                {
                    setPageSize: actions.setPageSize
                }
            ),
            withHandlers({
                onChange: (props: any) => (e: any) => {
                    props.setPageSize(+e.target.value);
                },
            }),
        )((obj: any) => {
            return (
                <div>
                    <select onChange={obj.onChange} defaultValue={obj.pageSize} className="custom-select" style={{width:"auto"}}>
                        {settings.pageSizes.map((s: any) => <option key={s} value={s}>Page Size: {s}</option>)}
                    </select>
                </div>
            )
        });

    const pluginConfig = {
        pageSizes: [5, 10, 20, 50],
    };

    const settingsPlugin = {
        components: {
            SettingsComponents: {
                columnChooser,
                pageSizeSettings: pageSizeSettings(pluginConfig),
            },
        },
    };



    return (
        <Container className="h-100" fluid>
            <Row className="justify-content-center">
                <Col>
                    <Griddle data={data}
                        plugins={[plugins.LocalPlugin, settingsPlugin]}
                        styleConfig={styleConfig}
                        sortProperties={sortProperties} >
                        <RowDefinition rowKey="date">
                            <ColumnDefinition id="date" title="Fecha" order={1} />
                            <ColumnDefinition id="type" title="Tipo" />
                            <ColumnDefinition id="barras" title="Codigo de barras" />
                            <ColumnDefinition id="nombre" title="Nombre" />
                            <ColumnDefinition id="action" title="Accion" />
                            <ColumnDefinition id="reason" title="Razon" />
                        </RowDefinition>
                    </Griddle>
                </Col>
            </Row>
        </Container>
    );
}

export default Reporte;