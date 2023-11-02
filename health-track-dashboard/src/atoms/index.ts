import { atom } from "recoil";


export const showAddUserModalState = atom({
    key: "showAddUserModalState",
    default: false,
});

export const showDeleteUserModalState = atom<{ show: boolean, id: number } | null>({
    key: "showDeleteUserModalState",
    default: null,
});
