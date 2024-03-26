import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import HeaderComponent from '../../layouts/HeaderComponent';
import FooterComponent from '../../layouts/FooterComponent';

const contactSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    subject: yup.string().required(),
    message: yup.string().required()
});

export default function ContactComponent() {
    const {register,setError, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(contactSchema)
    });

    const contact =(data)=>{
        console.log(data);
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12">
                    <HeaderComponent />
                </div>
                <div className="col-md-12  mt-3 mb-3">
                    <h1>Login Page</h1>
                </div>
                <div className="col-md-12">
                    <form onSubmit={handleSubmit(contact)}>
                    <div className="form-group mb-2">
                            <label>Name:
                            <a className='text-danger'>
                                {errors.name?.message && <span>{errors.name?.message}</span>}
                            </a>
                            </label>
                            <input type="text" className="form-control"
                            {...register('name')}
                            name="name" />
                        </div>
                        <div className="form-group mb-2">
                            <label>Email:
                            <a className='text-danger'>
                                {errors.email?.message && <span>{errors.email?.message}</span>}
                            </a>
                            </label>
                            <input type="email" className="form-control"
                            {...register('email')}
                            name="email" />
                        </div>
                        <div className="form-group mb-2">
                            <label>Subject:
                            <a className='text-danger'>
                                {errors.subject?.message && <span>{errors.subject?.message}</span>}
                            </a>
                            </label>
                            <input type="text" className="form-control"
                            {...register('subject')}
                            name="subject" />
                        </div>
                        <div className="form-group mb-2">
                            <label>Message:
                            <a className='text-danger'>
                                {errors.message?.message && <span>{errors.message?.message}</span>}
                            </a>
                            </label>
                            <textarea className="form-control"
                            {...register('message')}
                            name="message"></textarea>
                        </div>
                        <div className="form-group mb-2">
                            <button className='btn btn-success'>Contact Us</button>
                        </div>
                    </form>
                </div>
                <div className="col-md-12">
                    <FooterComponent />
                </div>
            </div>
        </div>
    )
}
