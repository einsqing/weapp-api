const wxa = require("./wxa");

/**获取用户信息***************************************/
function getUserInfo() {
    (async() => {
        const code = '001VyEqC1lZeu20CB7qC1A2vqC1VyEqb';
        const encryptedData = "klYELt4wlSbxUg7LEaRl6gsaw22CiM+dSh8y7Dplu7AESqc+/pxLb/4DEfQWRfoNWQHq7hb4QPqm8hqr5M9eZLeFlCuGvJl/GMx3NdP7QsuDBkjivIMjZIfiJM3y38j5XPJ8AzcVmC+whOemPYfbrOv+PAqUkA2saQmlK9w4lB2yYdVZhN4CWRyLqidDanS3bmKrCZXi5quW2ZOshWkJv+UgPoi0Wz6+Uy0o/fiwfjUv6deiEBFh2mzxzYpQTQA6XU0z2LKixlizIkXM8Mn5o7rOUPH27GQgMrhsz3y9Al96cxIB7NalDbap7i+/rLkZwyGWbv255Hf8ajtNUnhU5GGrZwNlGH0XHkclNm2OGb+UW44NhvAHNFxXKjzT8X4ZzPO3bb7hxHU0yFCIAbRzrZgE+pimmNnu5sf6rruzSVxRe1GMfx9XaABX5EVCZWhnkJNUNMaPkPYn1Dp83lJT4A==";
        const iv = "uxUX5ioFxvMDVwgOVivqaQ==";

        // const jscode2session = await wxa.jscode2session(code);
        const jscode2session = { 
            "session_key": "hSf8GAR6oL8GzEavHIuTwQ==", 
            "expires_in": 7200, 
            "openid": "oQgwY0fnJ-ODaCeommao9aV7gtpM" 
        };
        // console.log(jscode2session);
        const userInfo = await wxa.getUserInfo(encryptedData, iv, jscode2session.session_key);
        console.log(userInfo);
    })();
}
// getUserInfo();
function bindTester() {
    (async() => {
        try{
            const bindTester = await wxa.bindTester('biyuehun');
            console.log(bindTester);
            // const unbindTester = await wxa.unbindTester('biyuehun');
            // console.log(unbindTester);
        }catch(err){
            console.log(err);
        }
    })();
}
bindTester();