import React from 'react'
import { Link } from 'gatsby'

const ContactForm = () => {
    return (
        <div>
            <form 
            name="contact" 
            method="POST" 
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />
                <div className="form-group">
                    <label>お名前<abbr title="required">*</abbr>
                        <p><input type="text" className="form-control" id="name" name="name" placeholder="お名前" maxlength="30" minlength="2" required autocomplete="name" /></p>
                    </label>
                </div>
                <div className="form-group">
                    <label>メールアドレス<abbr title="required">*</abbr>
                        <p><input type="email" className="form-control" id="email" name="email" placeholder="" pattern="^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" required autocomplete="email" /></p>
                    </label>
                </div>
                <div className="form-group">
                    <label>お問い合わせ内容<abbr title="required">*</abbr>
                        <p><textarea className="form-control" id="contact" name="content" rows="8" required></textarea></p>
                    </label>
                </div>
                <div className="form-group">
                <Link to="/thanks"><button type="submit">送信</button></Link>
                </div>
            </form>
        </div>
    );
}

export default ContactForm