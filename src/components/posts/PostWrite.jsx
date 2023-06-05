import moment from 'moment'
import React, { useState } from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap'
import { app } from '../../firebaseInit';
import { getFirestore, addDoc, collection} from 'firebase/firestore'

const PostWrite = ({history}) => {
    const db =getFirestore(app);
    const [form, setForm] = useState({
        email: sessionStorage.getItem('email'),
        title: '리액트란?',
        body: '프론트페이지를 작성하는 언어',
        date: ''
    });
    const { email, title, body, date } = form; //비구조 할당
    const onChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }
    const onSubmit = async(e) => {
        e.preventDefault();
        if (title === '' || body === '') {
            alert('제목 또는 내용을 입력하세요');
        } else {
            //파이어베이스에 저장
            if (window.confirm('저장하시겠습니까?')) {
                //console.log(form);
                await addDoc(collection(db,'posts'),{
                    ...form,
                    date: moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
                });
                history.push('/posts');
            }
        }
    }
    return (
        <Row className='my-5'>
            <Col>
                <h1 className='text-center mb-5'>글쓰기</h1>
                <Form onSubmit={onSubmit}>
                    <Form.Control name="title" value={title} // 비구조할당 지정한걸 넣어줌
                        className='my-2'
                        onChange={onChange}
                        placeholder='제목을 입력하세요.' />
                    <Form.Control
                        name='body' value={body}
                        onChange={onChange}
                        placeholder='내용을 입력하세요.'
                        className='my-2'
                        as="textarea" row={10} />
                    <div>
                        <Button type="submit"
                            className='mx-2'>저장</Button>
                        <Button type="reset"
                            className='mx-2'
                            variant='secondary'>취소</Button>
                    </div>
                </Form>
            </Col>
        </Row>
    )
}

export default PostWrite