import axios from '../../api/config'

export const getSupportTickets = async () => {
    try {
        const response = await axios.get('/support-agent/support-tickets')
        return response?.data
        // return response	
    } catch (error) {
        console.error(error)
    }
}

export const getSupportTicketById = async (id) => {
    try {
        const response = await axios.get(`/support-agent/support-tickets/${id}`)
        return response?.data
        
    } catch (error) {
        console.error(error)
    }
}

export const createSupportTicket = async (ticket) => {
    try {
        const response = await axios.post('/support-agent/support-tickets', ticket)
        return response?.data
    } catch (error) {
        console.error(error)
    }
}

export const updateSupportTicket = async (id, ticket) => {
    try {
        const response = await axios.put(`/support-agent/support-tickets/${id}`, ticket)
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export const deleteSupportTicket = async (id) => {
    try {
        const response = await axios.delete(`/support-agent/support-tickets/${id}`)
        return response.data
    } catch (error) {
        console.error(error)
    }
}

