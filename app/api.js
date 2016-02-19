/**
 * Created by yan on 16-2-19.
 */

export const repos = (username)=>fetch(`https://api.github.com/orgs/${username}/repos`).then(res=>res.json())