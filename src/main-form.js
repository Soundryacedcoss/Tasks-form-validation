import React, { useState } from 'react'
export default function Mainform() {
  const[name,setName]=useState("")
  const[mobno,setMobno]=useState("")
  const [email,setEmail]=useState("")
  const[textarea,setTextarea]=useState("")
  const[upload,setUpload]=useState("")
  const[password,setPassword]=useState("")
  const [chk,setChk]=useState(true)
  const [date,setDate]=useState("")
// ****************** Here i am taking the values from user ***********************
  const nameHandler=(e)=>{
    let name1=e.target.value;
    setName(name1)
  } 
  const emailHandler=(e)=>{
    setEmail(e.target.value)
  }
  const passwordHandler=(e)=>{
    setPassword(e.target.value)
  }
  const textareaHandler=(e)=>{
    setTextarea(e.target.value)
  }
  const numberHandler=(e)=>{
    setMobno(e.target.value)
}
const chkHandler=(e)=>{
  setChk(e.target.value)
}
const fileHandler=(e)=>{
  setUpload(e.target.value)
}
const dateHandler=(e)=>{
  setDate(e.target.value)
}

    const RegisterHandler=(event)=>{
      event.preventDefault()
     
      // name
      var name1=name 
      // email 
    var email1=email
    var atposition=email1.indexOf("@");
    var dotposition=email1.lastIndexOf(".");
    var textarea1=textarea
     var password1=password
     var mobno1=mobno
     var upload1=upload
     console.log(password);
      // validation for every fields
      if(name1==="" && email1==="" && password1==="" && textarea1==="" && mobno1==="" && upload1==="" ){
        alert("All boxes should be filled");
        document.form.name.focus();
      }
      else if (name1==="") {
        alert("Please write Your name");
        document.form.name.focus();
      }
      else if(!isNaN(name1)){
        alert("Name should not be integer");
        document.form.name.focus();
      }
      else if(email1===""){
        alert("Plese enter your email")
        document.form.emails.focus();
      }
      else if ((atposition<1 || email1.lastIndexOf(".")<atposition+2 || dotposition+2>=email1.length)) {
        alert("please enter valid email");
        document.form.emails.focus();
      }
      else if(password===""){
        alert("Enter Your password");
        document.form.password.focus();
      }
      else if(password.length<=4){
        alert("it should be atleat 4 length");
        document.form.password.focus();
      }
      else if(textarea1===""){
        alert("Please enter your full address");
        document.form.textarea.focus();
      }
      else if(mobno1===""){
        alert("Enter your mobile number");
        document.form.number.focus();
      }
      else if(mobno1.length<10 ){
        alert("mobile number length should be 10");
        document.form.number.focus();
      }
      else if(isNaN(mobno1)){
         alert("number should be integer")
         document.form.number.focus();
      }
      else if(chk===""){
        alert("Select your Hobbies");
      }
      else if(chk===true){
        alert("Select your Hobbies");
      }
      else if(upload1===""){
        alert("Plese upload your Image")
      }
      else if(date===""){
        alert("Plese enter your date of Birth");
      }
      else{
        alert("Data Saved!")
      }
    }

  return (
    <div>
      <center>
       <form name='form'>
        <table>
          <tbody>
            <tr>validation Form</tr>
            <tr>
              <th>Enter your name</th>
              <td><input name='name' type="text" minLength="9" maxLength="20" onChange={nameHandler}/></td>
              </tr>
            <tr>
              <th>Enter your Email</th>
              <td> <input name='emails' type="email" onChange={emailHandler}/> </td>
              </tr>
            <tr>
              <th>Enter your Password</th>
              <td><input type="Password" name='password' onChange={passwordHandler} minLength={4} />
              </td>
              </tr>
            <tr>
              <th>Enter your Address</th> 
              <td> <textarea type="text"  name='textarea' onChange={textareaHandler} minLength="8" maxLength="30"/></td>
              </tr>
            <tr>
              <th>Enter your Mobile no</th>
              <td><input type="text" name='number' value={mobno} minLength="10" maxLength="10" onChange={numberHandler} required /></td>
              </tr>
            <tr>
              <th>Select your gender</th>
              <td>
              <input type="radio" name='Gender' defaultChecked='true'/>
              <label>Male</label>
              <input type="radio" value='Female' name='Gender' />
              <label>female</label>
              </td>
              </tr>
            <tr>
              <th>Choose your hobbies</th> 
              <td>
                <label>Cricket</label>
              <input type="checkbox" value={chk} onChange={chkHandler}/>
              <label>Singing</label>
              <input type="checkbox" value={chk} onChange={chkHandler} />
              <label>Dancing</label>
              <input type="checkbox" value={chk} onChange={chkHandler} />
              </td>
            </tr>
            <tr>
              <th>Chose Your Profile Pic</th>
              <td><input type="file" onChange={fileHandler} accept=".jpg, .jpeg,.png" /></td>
              </tr>
            <tr>
              <th>Select your DOB</th> 
              <td><input type="date" onChange={dateHandler} /></td>
              </tr>
            <tr>
              <button onClick={RegisterHandler}>Register</button>
              <button value="Reload Page" onClick="window.location.reload(true)">Reset</button>
              </tr>
          </tbody>
        </table>
      </form>
    </center>
    </div>
  )
}
