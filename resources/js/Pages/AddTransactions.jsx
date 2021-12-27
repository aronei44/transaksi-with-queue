import React,{Component} from 'react'
import { Head, Link } from '@inertiajs/inertia-react'
import Navbar from '../components/Navbar'

const AddTransaction = ({auth}) =>{
    return(
        <>
            <Navbar auth={auth}/>
            <div className='container mt-5  bg-light px-3 mx-auto' style={{width:'500px'}}>
                <h1 className='text-center'>Tambah Transaksi</h1>
                <div className='form-group mt-2'>
                    <label
                        for='product_name'>
                        Nama Produk
                    </label>
                    <input
                        type='text'
                        className='form-control'
                        placeholder='Masukan Nama Produk'
                        id='product_name'
                    />
                </div>
                <div className='form-group mt-2'>
                    <label
                        for='product_price'>
                        Harga Produk
                    </label>
                    <input
                        type='number'
                        className='form-control'
                        placeholder='Masukan Harga Produk'
                        id='product_price'
                    />
                </div>
                <div className='form-group mt-2'>
                    <label
                        for='product_amount'>
                        Jumlah Produk
                    </label>
                    <input
                        type='number'
                        className='form-control'
                        placeholder='Masukan Jumlah Produk'
                        id='product_amount'
                    />
                </div>
                <h4 className='mt-5'>Total: Rp .</h4>

                <button className="btn btn-primary">Beli</button>
            </div>
        </>
    )
}
export default AddTransaction
