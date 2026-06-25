import axios from 'axios'

export const getISSPosition = async () => {
  try {
    const response = await axios.get(
      'https://api.wheretheiss.at/v1/satellites/25544'
    )

    return response.data
  } catch (error) {
    console.error(error)
    return null
  }
}