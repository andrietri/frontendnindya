import React, {
    Component
} from 'react';

const bgColor = {
    backgroundColor: '#cd6133'
}

class LaporanPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
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
        let totalProduksi = 0;

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
                                <li className="nav-item">
                                    <a className="nav-link" href="/dashboard">Dashboard
                                    </a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link" href="/laporan">Laporan</a>
                                    <span className="sr-only">(current)</span>
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
                    <div className="row">
                        <h3 className="panel-title">Laporan Produk</h3>
                    </div>
                    <div className="row">
                        <br/>
                        <ul>
                            { this.state.data.map( (datasa,i) => { 
                                totalProduksi += parseInt(datasa.produksi);
                                return (
                                    <li style={{ marginBottom: '8px', marginTop: '8px' }}>Pada tanggal {datasa.tanggal} {datasa.wilayah} memiliki produksi {datasa.produksi}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="row">
                        <h4>Jumlah Produksi {totalProduksi} </h4>
                    </div>
                </div>
            </>
        )
    }
}

export default LaporanPage