import axios from "axios";



export const getUser = async (username,token) => {
    const response = await axios.get(`https://api.github.com/users/${username}`,{
            headers: {
                Authorization: `token ${token}`
            }
        }
    ).catch((err) => {
      
        console.log('=== err github.js [8] ===', err);
    }
    );

    // console.log('=== response from getUser github.js [9] ===', response.data);
    return response.data;

}


export const getRepos = async (username,token) => {
    const response = await axios.get(`https://api.github.com/users/${username}/repos`,{
            headers: {
                Authorization: `token ${token}`
            }
        }
    ).catch((err) => {
        console.log('=== err github.js [17] ===', err);
    }
    );

    // console.log('=== response from getRepos github.js [17] ===', response.data);
    return response.data;
}

