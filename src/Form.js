function Form () {
    return(

        <div class="formbold-main-wrapper">
  <div class="formbold-form-wrapper">
    <form >
        <div class="formbold-input-flex">
          <div>
              <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Kiu"
              class="formbold-form-input"
              />
              <label for="firstname" class="formbold-form-label"> First name </label>
          </div>
          <div>
              <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Kiudze"
              class="formbold-form-input"
              />
              <label for="lastname" class="formbold-form-label"> Last name </label>
          </div>
        </div>

        <div class="formbold-input-flex">
          <div>
              <input
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
              class="formbold-form-input"
              />
              <label for="email" class="formbold-form-label"> Mail </label>
          </div>
          <div>
              <input
              type="text"
              name="phone"
              id="phone"
              placeholder="(+995) 557-.."
              class="formbold-form-input"
              />
              <label for="phone" class="formbold-form-label"> Phone </label>
          </div>
        </div>

        <div class="formbold-textarea">
            <textarea
                rows="6"
                name="message"
                id="message"
                placeholder="Write your message..."
                class="formbold-form-input"
            ></textarea>
            <label for="message" class="formbold-form-label"> Message </label>
        </div>

        <div class="formbold-input-file">
          <div class="formbold-filename-wrapper">
            
            
          </div>
          <label for="upload" class="formbold-input-label">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqxE-E3auIyZovpapObyyZBRv9XcrclLkDEw&s" width="20px" height="25px"></img>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              </svg>
              Attach files
              <input type="file" name="upload" id="upload"></input>
          </label>
        </div>

        <button class="formbold-btn">
            Send Message
        </button>
    </form>
  </div>
</div>
    )
}

export default  Form