import React,{Component} from 'react'
import { Head, Link } from '@inertiajs/inertia-react'
import Navbar from '../components/Navbar'

export default class Index extends Component{
    render(){
        return(
            <>
				<Navbar />
                <div className='container mt-5  '>
                    <h1>Semua Transaksi Anda</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nama Produk</th>
                                <th scope="col">Harga Produk</th>
                                <th scope="col">Jumlah Produk</th>
                                <th scope="col">Total Harga</th>
                                <th scope="col">Status</th>
                                <th scope="col">Aksi</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}
