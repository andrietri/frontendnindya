import React, {
    Component
} from 'react';

import './Dashboard.css';

const bgColor = {
    backgroundColor: '#cd6133'
}

class DashboardPage extends Component {
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
                                    <a className="nav-link" href="/login">Login</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* <!-- Page Content --> */}
                <div className="container">
                    <br/>
                    <br/>
                    
                    <div id="chartContainer" style={{ height: '300px', width: '100%' }}></div>
                </div>

                <div className="container">
                    <br/>
                    <br/>

                    <div className="row">
                        <div className="panel panel-primary filterable">
                            <div className="panel-heading">
                                <h3 className="panel-title">Laporan Produk</h3>
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
                                    <tr>
                                        <td>1</td>
                                        <td>20/10/2020</td>
                                        <td>1</td>
                                        <td>100000</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>21/10/2020</td>
                                        <td>2</td>
                                        <td>150000</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>22/10/2020</td>
                                        <td>3</td>
                                        <td>200000</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>21/10/2020</td>
                                        <td>4</td>
                                        <td>300000</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>22/10/2020</td>
                                        <td>5</td>
                                        <td>300000</td>
                                    </tr>
                                </tbody>
                            </table>
                            <br/>
                            <br/>
                            <br/>
                        </div>
                    </div>
                </div>
                {/* <!-- /.container --> */}
            </>
        )
    }
}

export default DashboardPage