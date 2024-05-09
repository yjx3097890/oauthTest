import express from "express";
import axios from "axios";
import qs from "qs";

let user = null;

const router = express.Router()

const clientId = 'Ov23ct9aUg0jw2c2r66v'

const clientSecret = 'ef014101e4bd725c21f4f4426bc98c3bd0040c11'

router.get('/callback', async (req, res) => {
    const { code } = req.query;
    const accessToken = await axios.post('https://github.com/login/oauth/access_token', {
        client_id: clientId,
        client_secret: clientSecret,
        code
    })
    const { access_token } = qs.parse(accessToken.data)
    /* 获取用户的信息 */
    const userInfo = await axios.get('https://api.github.com/user', {
        /* Bearer 后面记得跟一个空格 */
        headers: {
            Authorization: 'Bearer ' + access_token
        }
    })
    user = userInfo.data
    res.redirect('/');
});

router.get('/user', (req, res) => {
    res.send(user);
});


export default router;
