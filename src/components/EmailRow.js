import React from 'react'
import './EmailRow.css'
import { Checkbox, IconButton } from '@material-ui/core'
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectMail } from '../features/mailSlice';

function EmailRow({ id, title, subject, description, time}) {

    const dispatch = useDispatch();
    const history = useHistory();

    const openMail = () => {
        dispatch(selectMail({
            id,
            title,
            subject,
            description,
            time,
        })
        );
        history.push('/mail');
    }

  return (
    <div onClick={openMail} className='emailRow'>
        <div className='emailRow_options'>
            <Checkbox/>

            <IconButton>
                <StarOutlinedIcon/>
            </IconButton>

            <IconButton>
                <LabelImportantOutlinedIcon/>
            </IconButton>
        </div>

        <h3 className='emailRow_title'> {title}</h3>

        <div className='emailRow_message'>
            <h4>
                {subject}{' - '}
                <span className='emailRow_description'>{description}</span>
            </h4>
        </div>

        <p className='emailRow_description'>{time}</p>
    </div>
  )
}

export default EmailRow