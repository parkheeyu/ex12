import React, { useEffect, useState } from 'react'
import { Row, Col, Table, Button } from 'react-bootstrap'
import { app } from '../firebaseInit'
import { getDatabase, ref, onValue, remove } from 'firebase/database'

const CartPage = () => {
    const uid = sessionStorage.getItem('uid');
    const db = getDatabase(app);
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const getBooks = () => {
        onValue(ref(db, `cart/${uid}`), (snapshot) => {
            let rows = [];
            snapshot.forEach(row => {
                rows.push({ key: row.key, ...row.val() });
            });
            //console.log(rows);
            setBooks(rows);
            setLoading(false);
        });
    }
    useEffect(()=>{
        getBooks();
    })

    if (loading) return <h1>로딩중.........</h1>
    return (
        <Row className='my-5'>
            <Col>
                <h1 className='text-center'>장바구니</h1></Col>
            <Table>
                <thead>
                    <tr>
                        <td>제목</td>
                        <td>가격</td>

                    </tr></thead>
                <tbody>
                    {books.map(book => {
                        <tr key={book.key}>
                            <td>{book.title}</td>
                            <td>{book.price}</td>
                        </tr>
                    })}
                </tbody>
            </Table>

        </Row>

    )
}

export default CartPage