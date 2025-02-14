const responseAll = async () => {
  const options: any = {
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Basic ' + btoa('integracao.app@delfia.tech:ATATT3xFfGF07lPQTeYNIV56htwInWVdKdAxj3m_z64ObiKdAwJZjx8JT8cdTLmEbhy2PmQfvYt_5S7xGXmZ1AO7ewi2D9T2me1RBfajrA_A2V0lbeDYpfYgzGiNQRn4ozqjX7B97FFe0yiOuzixRoUjyn8qH1cLcP6gja4w9LRW-9L0EcXxKyo=B8FA0C2B')
    },
    method: "POST",
  };

  const response = await fetch(
    `https://delfia.atlassian.net/rest/api/2/issue/createmeta`,
    options
  );

  return response;
};

export default responseAll;
