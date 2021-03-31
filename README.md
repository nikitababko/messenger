# Messenger

[You can see screenshots of the messenger below](#screenshots)

## Install

1. `npm install` или `yarn install`
2. Create `.env` file.
3. Install MongoDB and start it.
4. Run command `npm start` or `yarn start`.

## Receiving email of confirm

I use `nodemailer`. But can use to any SMTP-server.

1. Registration to [mailtrap.io](https://mailtrap.io)
2. Enter to your account on this service.
3. In list "Inboxes" open "Demo inbox".
4. Get your information about your SMTP or POP3-server.
5. Create `.env` file at `server/` and enter your values in it. More on this below.

   ```
    NODE_ENV=development
    PORT=3003

    JWT_SECRET=
    JWT_MAX_AGE=

    NODEMAILER_HOST=
    NODEMAILER_PORT=
    NODEMAILER_USER=
    NODEMAILER_PASS=

    CLOUDINARY_NAME=
    CLOUDINARY_API_KEY=
    CLOUDINARY_API_SECRET=

   ```

6. Specify in the `NODEMAILER_HOST` and etc the data that gave you mailtrap.io.
7. Restart your backend.
8. After every registration of an account in chat, in section "Demo inbox" (Mailtrap) you will receive confirmation emails.

P.S.: You can also confirm your account without Mailtrap. Just find your user in the DB and specify `confirmed: true` or follow the link `http://localhost:{FRONTEND_PORT}/signup/verify?hash={HASH}`.

## Upload files on Cloudinary

Need regisration on the site [cloudinary.com](https://cloudinary.com/)

Into file `.env` you need to specify parameters for Cloudinary API. Follow the link [Dashboard](https://cloudinary.com/console) and copy your API-parameters. Below is a screenshot where you can take your API-parameters.

![](https://image.prntscr.com/image/XOvt2ponRbKQyWUiSoI5vw.png)

**Stack which I'm use:**

**Frontend:**

- ReactJS
- Redux
- React Router
- Axios
- Ant Design
- date-fns
- Formik

**Backend:**

- NodeJS
- TypeScript
- Express
- Mongoose
- Multer
- Nodemailer
- Socket.io
- JWT
- Cloudinary

## <a name="screenshots">Screenshots</a>

<div align="center" >
  <h3>Sign in</h3>
  <img style="margin:50px 0;" src="screenshots/signin.jpg" />
 
  <h3>Sign up</h3>
  <img style="margin:50px 0;" src="screenshots/signup.jpg" />
  
  <h3>Home - white theme</h3>
  <img style="margin:50px 0;" src="screenshots/white-theme.jpg" />
  
  <h3>Home - black theme</h3>
  <img style="margin:50px 0;" src="screenshots/black-theme.jpg" />
  
  <h3>Emoji</h3>
  <img style="margin:50px 0;" src="screenshots/emoji.jpg" />
</div>
