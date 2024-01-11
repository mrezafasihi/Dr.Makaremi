import ChangePassForm from '@/components/user/ChangePassForm'
import CustomButton from '@/components/user/CustomButton'
import NavbarConfirm from '@/components/user/NavbarConfirm'
import TextChangePass from '@/components/user/TextChangePass'
import React from 'react'

function changePass() {
  return (
    <div>
        <NavbarConfirm/>
        <TextChangePass/>
        <ChangePassForm/>
        
    </div>
  )
}

export default changePass