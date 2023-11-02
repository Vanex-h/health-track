import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { FiPlus } from 'react-icons/fi'
import { useRecoilState } from 'recoil'
import { showAddUserModalState } from '../../atoms'
import { Button } from '../Button'
import { TextField } from '../Fields'
import Loader from '../Loader'
import ModalLayout from '../layouts/ModalLayout'


export default function AddUser() {
    const navigate = useNavigate()
    const [showModal, setShowModal] = useRecoilState(showAddUserModalState);
    const [loading, setLoading] = useState(false);
    const [fullnames, setfullnames] = useState("")
    const [national_id, setnational_id] = useState("")
    const [frequent_sickness, setfrequent_sickness] = useState("")


    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true);

        const response = await fetch("http://localhost:1400/patient", {
            method: "POST",
            body: JSON.stringify({
                patient_national_id: national_id,
                patient_name: fullnames,
                frequent_sickness
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        setLoading(false)
        if (response?.status == 201) {
            setLoading(false);
            toast.success('Patient created successfully');
            setShowModal(false);
            navigate("/dashboard/users")
        }
        else {
            toast.error('The patient was not created succesfully')
        }
    };

    return (
        <ModalLayout open={showModal} setOpen={() => setShowModal(false)} >
            <div className='w-full flex flex-col items-center gap-2'>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <FiPlus className="h-6 w-6 text-blue-600" aria-hidden="true" />
                </div>
                <h2 className='font-medium text-xl text-gray-600'>Add A new User </h2>
            </div>
            <form
                className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
                onSubmit={handleSubmit}
            >
                <TextField
                    label="Full Names"
                    className='col-span-full'
                    value={fullnames}
                    onChange={(e) => setfullnames(e.target.value)}
                    id="fullnames"
                    name="fullnames"
                    type="text"
                    autoComplete="fullnames"
                    required
                />

                <TextField
                    className="col-span-full"
                    label="National ID"
                    id="national_id"
                    value={national_id}
                    onChange={(e) => {
                        setnational_id(e.target.value)
                    }}
                    name="national_id"
                    type="text"
                    autoComplete="national_id"
                    required
                />
                <TextField
                    className="col-span-full"
                    label="Frequent Sickness"
                    id="frequent_sickness"
                    value={frequent_sickness}
                    onChange={(e) => {
                        setfrequent_sickness(e.target.value)
                    }}
                    name="frequent_sickness"
                    type="text"
                    autoComplete="frequent_sickness"
                    required
                />

                <div className="col-span-full">
                    <Button
                        disabled={loading}

                        variant="solid"
                        color="blue"
                        className="w-full"
                    >
                        {loading ?
                            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-50" /> :
                            <span>
                                {loading ? <Loader /> : "Create User"}
                            </span>
                        }
                    </Button>
                </div>
            </form>
        </ModalLayout>
    )
}