import React from 'react'
import { IoIosSend } from 'react-icons/io'
export default function MessageBar() {
    return (
        <div className='w-100 fixed-bottom'>
            <form className='container mb-3'>
                <div className="input-group input-group-lg">
                    <input type="text" className="form-control" placeholder="Message" />
                    <button className="input-group-text " id="basic-addon1">
                        <IoIosSend className='mt-1 ms-1 text-primary fs-2' />
                    </button>
                </div>
            </form>
        </div>
    )
}
