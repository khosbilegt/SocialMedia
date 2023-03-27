import { type } from "@testing-library/user-event/dist/type";
import { auth, getUserInfo, getInfo } from "../handlers/firebase"


export async function getDisplayName() {
     var displayName = ""
     const userSnap = await getUserInfo()
     .then((info) => {
          displayName = info["displayName"]
     })
     return displayName;
}