const BadResponce = props => {
  return (
    <div className='bad-responce'>
      <span>😥 Щось пішло не так, {props.error} ...</span>
    </div>
  )
}

export default BadResponce
