import { useRecoilState } from "recoil";
import { showDeleteUserModalState } from "../atoms";
import { Button } from "./Button";
import { RiDeleteBin5Line } from "react-icons/ri"
import { IUser } from "../types";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";



export default function UsersTable({ users }: { users: IUser[] }) {
    return (
        <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div className="overflow-auto  shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg min-h-[60vh]">
                        <table className="min-w-full  divide-y divide-gray-300">
                            <thead className="">
                                <tr>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                        ID
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 shrink-0">
                                        Full names
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        National Id
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Frequent sickness
                                    </th>
                                    <th scope="col" className="relative py-3.5 text-center pr-36">
                                        Delete or View
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {
                                    users.map((user: IUser, idx) => (
                                        <UserRow key={idx} {...user} />
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

const UserRow = ({ id, name, frequent_sickness, national_id }: IUser) => {
    
    const [_show, setShowDelete] = useRecoilState(showDeleteUserModalState);

    return (
        <tr>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                {id}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{name}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{national_id}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{frequent_sickness}
            </td>
            <Button className="rounded-md space-x-2" color="red" variant="solid"
                onClick={() => setShowDelete({
                    id, show: true
                })}
            >
                <span>Delete</span>
                <RiDeleteBin5Line />
            </Button>
            <Link to={`${id}`}>
                <Button className="rounded-md space-x-2 ml-12" color="red" variant="solid">
                    <span>View</span>
                    <FiUser />
                </Button>
            </Link>
        </tr >
    )
}