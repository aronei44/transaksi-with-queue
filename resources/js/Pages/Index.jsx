import React,{Component} from 'react'
import { Head } from '@inertiajs/inertia-react'
import Navbar from '../components/Navbar'

const Index = ({auth})=>{
    return(
        <>
            <Navbar auth={auth}/>
            <div className='container mt-5'>
                <h1 className='mb-5'>Selamat datang</h1>
                <table style={{width:'300px'}}>
                    <tr>
                        <td>Total Transaksi</td>
                        <td>: 10</td>
                    </tr>
                    <tr>
                        <td>Transaksi Selesai</td>
                        <td>: 5</td>
                    </tr>
                    <tr>
                        <td>Transaksi Gagal</td>
                        <td>: 5</td>
                    </tr>
                </table>
            </div>
        </>
    )
}
export default Index
