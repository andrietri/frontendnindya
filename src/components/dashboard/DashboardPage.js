import React, {
    Component
} from 'react';

import './Dashboard.css';

const bgColor = {
    backgroundColor: '#cd6133'
}

class DashboardPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    tanggal: '20/10/2020',
                    wilayah: 'Wilayah 1',
                    produksi: '100000'
                },
                {
                    tanggal: '21/10/2020',
                    wilayah: 'Wilayah 2',
                    produksi: '150000'
                },
                {
                    tanggal: '22/10/2020',
                    wilayah: 'Wilayah 3',
                    produksi: '200000'
                },
                {
                    tanggal: '21/10/2020',
                    wilayah: 'Wilayah 4',
                    produksi: '300000'
                },
                {
                    tanggal: '22/10/2020',
                    wilayah: 'Wilayah 5',
                    produksi: '300000'
                }
            ]
        };
    }

    render() {
        return (
            <>
                {/* <!-- Navigation --> */}
                <nav className="navbar navbar-expand-lg navbar-dark static-top" style={bgColor}>
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/e/ec/CMYK_LOGO-01_pngs.png" 
                                alt="" 
                                width = "50"
                                height = "60"
                            />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/dashboard">Dashboard
                                        <span className="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/laporan">Laporan</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* <!-- Page Content --> */}
                <div className="container">
                    <br/>
                    <br/>
                    
                    <div className="card">
                        <div className="card-body" style={{ boxShadow: '10px 10px 5px grey' }}>
                            <div id="chartContainer" style={{ height: '300px', width: '100%' }}></div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <br/>
                    <br/>

                    <div className="row">
                        <div className="card">
                            <div className="card-body" style={{ boxShadow: '10px 10px 5px grey' }}>
                                <div className="panel panel-primary filterable">
                                    <div className="panel-heading">
                                        <h3 className="panel-title">Tabel Produk</h3>
                                        <br/>
                                        <button className="btn btn-default btn-xs btn-filter">
                                            <i className="fa fa-filter" aria-hidden="true"></i>
                                            &nbsp;Filter
                                        </button>
                                    </div>
                                    <table className="table">
                                        <thead>
                                            <tr className="filters">
                                                <th><input type="text" className="form-control" placeholder="#" disabled/></th>
                                                <th><input type="text" className="form-control" placeholder="Tanggal" disabled/></th>
                                                <th><input type="text" className="form-control" placeholder="Wilayah" disabled/></th>
                                                <th><input type="text" className="form-control" placeholder="Produksi" disabled/></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            { this.state.data.map( (datasa,i) => { 
                                                return (
                                                    <tr key={i}>
                                                        <td>{ i+1 }</td>
                                                        <td>{ datasa.tanggal }</td>
                                                        <td>{ datasa.wilayah }</td>
                                                        <td>{ datasa.produksi }</td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                {/* <!-- /.container --> */}
            </>
        )
    }
}

export default DashboardPage