import axios from "axios";
import Cookie from "universal-cookie";

export async function getTokenOrRefresh() {
  const cookie = new Cookie();
  const speechToken = cookie.get("speech-token");

  if (speechToken === undefined) {
    try {
      // const res = await axios.get("/api/get-speech-token");
      // const token = res.data.token;
      // const region = res.data.region;
      // const token = "fb4d7fc0fd4442a7b16d18151dd315c8";
      // const region = "koreacentral";
      const token = process.env.NEXT_PUBLIC_AZURE_SPEECH_TOKEN;
      const region = process.env.NEXT_PUBLIC_AZURE_SPEECH_REGION;
      cookie.set("speech-token", region + ":" + token, {
        maxAge: 540,
        path: "/",
      });

      console.log("Token fetched from back-end: " + token);
      return { authToken: token, region: region };
    } catch (err: any) {
      console.log(err.response.data);
      return { authToken: null, error: err.response.data };
    }
  } else {
    console.log("Token fetched from cookie: " + speechToken);
    const idx = speechToken.indexOf(":");
    return {
      authToken: speechToken.slice(idx + 1),
      region: speechToken.slice(0, idx),
    };
  }
}
