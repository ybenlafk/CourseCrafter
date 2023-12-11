'use client';
import React, { useEffect, useState } from 'react';
import { NavBar } from '../../components';

interface Etudiant {
  email: string;
  name: string;
  username: string;
  code_postal: Number;
  date_nes: string;
  group_id: number;
  nb_pre  : Number;
  price  : Number;
}

const AddPost = () => {
  const [etudiant, setEtudiant] = useState<Etudiant>({
    email: '',
    name: '',
    username: '',
    code_postal: 0,
    date_nes: '',
    group_id: 1,
    nb_pre:0,
    price:0
  });

  interface GroupEtudiantCounts {
    [key: number]: number;
  }

  interface Group {
    id: number;
    level: string;
  }

  const [groups, setGroups] = useState<Group[]>([]);
  const [groupEtudiantCounts, setGroupEtudiantCounts] = useState<GroupEtudiantCounts>({});
  const [pop, setPop] = useState(0);

  const handleGroupChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEtudiant((prevEtudiant) => ({
      ...prevEtudiant,
      group_id: +e.target.value,
    }));
  };

  const handlePriceChange = (e :React.ChangeEvent<HTMLInputElement>) => {
    const value :number = +e.target.value;
    const nb_pre :number = value / 150;
    setEtudiant((prevEtudiant) => ({
      ...prevEtudiant,
      price: value,
      nb_pre: nb_pre
    }));
  };

  useEffect(() => {
    fetch('http://localhost:8080/group')
      .then((response) => response.json())
      .then(async (data) => {
        setGroups(data);

        // Fetch etudiant counts for each group
        const counts = await Promise.all(
          data.map(async (group: any) => {
            const response = await fetch(`http://localhost:8080/group/${group.id}/etudiants/count`);
            const countData = await response.json();
            return { groupId: group.id, count: countData.count };
          })
        );
  
        // Convert the array of counts to an object for easy lookup
        const countsObject = counts.reduce((acc, { groupId, count }) => {
          acc[groupId] = count;
          return acc;
        }, {});
  
        setGroupEtudiantCounts(countsObject);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [pop]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedValue = name === 'code_postal' ? +value : value;
    setEtudiant((prevEtudiant) => ({
      ...prevEtudiant,
      [name]: updatedValue,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if the selected group has 8 or more etudiants
    if (groupEtudiantCounts[etudiant.group_id] >= 8) {
      setPop(2);
      setTimeout(() => {
        setPop(0);
      }, 2000);
      return;
    }
    try {
      const response = await fetch('http://localhost:8080/etudiant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(etudiant),
      });

      if (response.ok) {
        console.log('Etudiant added successfully');
        setPop(1);
        setTimeout(() => {
          setPop(0);
        }, 2000);
        // setEtudiant({email: '',name: '',username: '',code_postal: 0,date_nes: '', group_id: 0});
      } else {
        console.error('Failed to add etudiant');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div className="max-w-screen-md mx-auto mt-8">
        {pop === 1 ?
          <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
            <span className="font-medium">the etudiant has been added successfully</span>
          </div>
          : null
        }
        {pop === 2 ?
          <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            <span className="font-medium">Cannot add etudiant to a group with 8 or more etudiants</span>
          </div>
          : null
        }
        <form
          className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              name="email"
              value={etudiant.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
              name="name"
              value={etudiant.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter your username"
              name="username"
              value={etudiant.username}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="code_postal">
              Code Postal
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="code_postal"
              type="text"
              placeholder="Enter your code postal"
              name="code_postal"
              value={"" + etudiant.code_postal}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="code_postal">
              Price
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="price"
              type="text"
              placeholder="Enter your Price"
              name="price"
              value={"" + etudiant.price}
              onChange={handlePriceChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="date_nes">
              Date of Birth
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="date_nes"
              type="date"
              placeholder="Enter your code postal"
              name="date_nes"
              value={etudiant.date_nes}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="group">
              Group
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="group"
              name="group"
              onChange={handleGroupChange}
            >
              <option value="" disabled className="text-gray-400 text-sm font-bold mb-2">Select a group</option>
              {groups.map((group) => (
                <option key={group.id} value={group.id}>
                  Group {group.id} - [Level: {group.level}] - [{groupEtudiantCounts[group.id] || 0} etudiants]
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-gray-500 w-80 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Create Etudiant
            </button>
          </ div>
        </form>
      </div>
    </>
  );
}

export default AddPost;
