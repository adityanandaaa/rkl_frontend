import React, { useState } from "react";
import axios from 'axios'

const Setting = () => {
    const [items, setItems] = useState([])
    const baseUrl = process.env.REACT_APP_API_URL

    function fetchSetting() {
        axios.get(`${baseUrl}/setting?name=homepage_text`)
        .then((res) => {
            const items = res.data
            setItems(items)
        })
    }
    return items
}

export default Setting