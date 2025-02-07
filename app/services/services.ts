let customHeaders = new Headers({
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    'Authorization': 'Bearer <ATATT3xFfGF07lPQTeYNIV56htwInWVdKdAxj3m_z64ObiKdAwJZjx8JT8cdTLmEbhy2PmQfvYt_5S7xGXmZ1AO7ewi2D9T2me1RBfajrA_A2V0lbeDYpfYgzGiNQRn4ozqjX7B97FFe0yiOuzixRoUjyn8qH1cLcP6gja4w9LRW-9L0EcXxKyo=B8FA0C2B>',
  });

const responseAll = async () => {
  
    const options: any = {
      headers: customHeaders,
      method: "GET",
    };
  
    const response = await fetch(`https://api.atlassian.com/jsm/assets/workspace/22/v1/aql/objects`, options)
    return response;
  }

export default responseAll