'use client';
import React, { useEffect, useState } from 'react';

interface Etudiant {
  id: number;
  name: string;
  username: string;
  email: string;
  nb_pre: number;
  group_id: number;
}

interface Matier {
  id: number;
  name: string;
  formation_id: number;
}

interface Group {
  id: number;
  level: number;
  matiers_id: number;
}

const HomePage = () => {
  const [etudiants, setEtudiants] = useState<Etudiant[]>([]);
  const [selectedGroup, setSelectedGroup] = useState<Number>(0);
  const [filteredEtudiants, setFilteredEtudiants] = useState<Etudiant[]>([]);
  const [filtredmatier, setFiltredmatier] = useState<Matier[]>([]);
  const [filtredGroups, setFiltredGroups] = useState<Group[]>([]);
  const [matier, setMatier] = useState<Matier[]>([]);
  const [groups, setGroups] = useState<Group[]>([]);
  const formations = ["Soft Skills", "languages", "Coure"];

  useEffect(() => {
    fetch('http://localhost:8080/etudiant')
      .then(res => res.json())
      .then(res => {
        setEtudiants(res);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    fetch('http://localhost:8080/matier')
      .then(res => res.json())
      .then(res => {
        setMatier(res);
      })
      .catch(err => console.log(err));
  }
    , []);

  useEffect(() => {
    fetch('http://localhost:8080/group')
      .then(res => res.json())
      .then(res => {
        setGroups(res);
      })
      .catch(err => console.log(err));
  }, []);

  const handleFormationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFiltredmatier(matier.filter(matier => matier.formation_id === e.target.selectedIndex));
  };

  const handleMatierChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFiltredGroups(groups.filter(group => group.matiers_id === +e.target.value));
  };

  const handleGroupChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGroup(+e.target.value);
  };

  const handleSearch = () => {
    setFilteredEtudiants(etudiants.filter(etudiant => etudiant.group_id === selectedGroup));
  }

const handleAttended = () =>
{
  const updatePromises = filteredEtudiants.map(etudiant => 
  {
    const updatedNbPre = etudiant.nb_pre - 1;

    // Check if nb_pre is greater than 0 before making the request
    if (updatedNbPre >= 0) 
    {
      return fetch(`http://localhost:8080/etudiant/${etudiant.id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nb_pre: updatedNbPre })
      })
        .then(res => 
        {
            if (!res.ok)
              throw new Error('Network response was not ok');
          return res.json();
        });
    }
    else 
      return Promise.resolve({ success: false, message: 'nb_pre is already 0' });
  });

  Promise.all(updatePromises)
    .then(responses => {
      const updatedEtudiants = [...etudiants];
      const updatedFilteredEtudiants = [...filteredEtudiants];

      responses.forEach((res, index) => {
        const etudiant = filteredEtudiants[index];

        if (res.success && res.data) {
          updatedEtudiants[updatedEtudiants.findIndex(e => e.id === etudiant.id)].nb_pre = res.data.nb_pre;
          updatedFilteredEtudiants[index].nb_pre = res.data.nb_pre;
        } else {
          // ....
        }
      });

      setEtudiants(updatedEtudiants);
      setFilteredEtudiants(updatedFilteredEtudiants);
    })
    .catch(err => console.log(err));
};

  



  const handleDelete = (id: number) => {
    fetch(`http://localhost:8080/etudiant/${id}`, {
      method: 'DELETE',
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(res => {
        if (res.success) {
          setEtudiants(etudiants.filter(etudiant => etudiant.id !== id));
          setFilteredEtudiants(filteredEtudiants.filter(etudiant => etudiant.id !== id));
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="m-4">

      <div className="flex">
        <select
          id="Formations"
          className="w-full mr-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handleFormationChange}
        >
          <option value="" >Select a formation</option>
          {formations && formations.map((group) => (
            <option key={group} value={group}>
              {group}
            </option>
          ))}
        </select>

        <select
          id="Matiers"
          className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handleMatierChange}
        >
          <option value="" >Select a matier</option>
          {filtredmatier && filtredmatier.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <select
        id="Matiers"
        className="mt-4 mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={handleGroupChange}
      >
        <option value="" >Select a group</option>
        {filtredGroups && filtredGroups.map((item) => (
          <option key={item.id} value={item.id}>
            Group {item.id} [Level: {item.level}]
          </option>
        ))}
      </select>
      <div className="flex justify-center mt-4">
        <button
          className="bg-gray-400 w-full text-white px-4 py-2 rounded-md"
          onClick={handleSearch}
        >
          Search
        </button>
        <button
          className="ml-2 bg-indigo-500 w-full text-white px-4 py-2 rounded-md"
          onClick={handleAttended}
        >
          Attended
        </button>
      </div>
      <table className="min-w-full bg-dark text-white">
        <thead>
          <tr>
            <th className="py-2">ID</th>
            <th className="py-2">Email</th>
            <th className="py-2">Name</th>
            <th className="py-2">Username</th>
            <th className="py-2">number of pre</th>
          </tr>
        </thead>
        <tbody>
          {filteredEtudiants && filteredEtudiants.map((etudiant, i) => (
            <tr key={etudiant.id}>
              <td className="py-3 text-center">{i + 1}</td>
              <td className="py-3 text-center">{etudiant.email}</td>
              <td className="py-3 text-center">{etudiant.name}</td>
              <td className="py-3 text-center">{etudiant.username}</td>
              <td className="py-3 text-center">{etudiant.nb_pre}</td>
              <td className="py-3  text-center">
                <svg
                  className='cursor-pointer'
                  onClick={() => handleDelete(etudiant.id)}
                  width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12V16M10 14H14M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default HomePage;