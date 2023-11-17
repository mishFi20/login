import { useState } from 'react'
import {
    Typography,
    TextField,
    Button,
    Checkbox,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
    Stack,
    Modal,
    Box,
    Paper,
} from "@mui/material";
import MenuItem from '@mui/material/MenuItem';

export default function Formulario() {

    const [formData, setFormData] = useState({
        
        password: '',
        usuario: '',
    })


    const [modalOpen, setModalOpen] = useState(false)


    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        setModalOpen(true)
    }

    const handleCloseModal = () => {
        setModalOpen(false)
        handleClearForm()
    }

    const handleClearForm = () => {
        setFormData({
           
            password: "",
            usuario: "",
            
        });
    };


    

}
