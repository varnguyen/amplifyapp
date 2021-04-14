export const CONFIG = {
    // ------ App Config -----

    WEB_NAME: 'BANHANG', // Edit the site name here
    TOKEN_KEY: 'BANHANG-TOEKN', // token key
    TIMEOUT: 1200000, // Request timeout, milliseconds (default 2 minutes)

    ICE_SERVER_CREDENTIAL: 'R4dKd7G7',
    ICE_SERVER_USERNAME: 'iceuser',
    SERVER_LIVESTREAM_TURN: '10.64.100.48',
    SERVER_LIVESTREAM: 'ws://10.64.100.48:4000', // wss 4001

    // ------  constans ------
    DEFAULT_AVATA: '/assets/default_avata.png',
    IMG_FALL_BACK: '/assets/fallback-image.gif', // fallback-image.png
    SENDER_ID: 842550913355,
    // eslint-disable-next-line
    EMAIL_FORMAT: /^[a-z]+[a-z0-9._]+@[a-z\-]+\.[a-z.]{2,8}$/,
    // eslint-disable-next-line
    EMAIL_OR_PHONE_FORMAT: /^([a-z]+[a-z0-9._]+@[a-z\-]+\.[a-z.]{2,8})|((0[126389]|09)[0-9]{8})$/,
    // eslint-disable-next-line
    PHONE_FORMAT: /^(0[126389]|09)[0-9]{8}$/,
    // eslint-disable-next-line
    PASSPORT_ID_FORMAT: /^([A-Z]{1}[0-9]{7}|[0-9]{9}|[0-9]{12})$/,
    OTP_CODE_FORMAT: /^[0-9]{6}$/,

    JWP_KEY: '8fNwFw1bCCi/ib5rGOBThdSLORTR0gCOpBsE9svAYas=',
    GA_ID: 'abc'
}
