import React from 'react'
import { motion as m } from 'framer-motion'
import Animate from '../animate'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const Form = () => {
  const TOKEN = '5955226386:AAEbZBB21Lh831KKeECL9GOImX4B5r1ZS7Y'
  const CHAT_ID = '-1001840399816'
  const SRC = `https://api.telegram.org/bot${TOKEN}/sendMessage`

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
  })

  const onSubmit = formData => {
    let message = `<b>Лист з сайту</b>\n<b>Відправник: ${formData.phoneNumber}</b>`

    axios
      .post(SRC, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message,
      })
      .then(() => {
        reset()
      })

    alert("Дякую я з вами зв'яжусь.")
  }

  return (
    <m.form
      className='contact-form'
      action='mail.php'
      method='POST'
      custom={2}
      variants={Animate}
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className='calback' htmlFor='phone'>
        <input
          type='number'
          name='phone'
          placeholder='+380(...)'
          {...register('phoneNumber', {
            required: 'Поле обов`язкове.',
            minLength: {
              value: 9,
              message: 'Мінімум 9 символів.',
            },
            maxLength: {
              value: 12,
            },
          })}
        />
      </label>
      <div className='badValidate'>
        {errors?.phoneNumber && <span>{errors?.phoneNumber?.message || 'Error'}</span>}
      </div>
      <button className='btn' type='submit' disabled={!isValid}>
        &#8594;
      </button>
    </m.form>
  )
}

export default Form
