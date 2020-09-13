import React, { useEffect } from 'react';
import useCommon from '../../hooks/Common';

function RepositoryPage() {
  const { repoResume } = useCommon();

  useEffect(() => {
    if(!repoResume?.id)
      alert('TEM QUE BUSCAR RESUMO');

      //TODO: Buscar outras coisas;
  }, [repoResume]);

  return (
    <div>
      {repoResume?.id}
    </div>
  )
}

export default RepositoryPage;
