'use client';
import React, { useEffect, useState } from 'react';

interface Group {
  duree     :number;
  date      :String;
  level     :String;
  matiers_id :number;
  prof_id   :number;
}

const AddPost = () => {
  const [group, setGroup] = useState<Group>({
    duree: 0,
    date: '',
    level: '',
    matiers_id: 0,
    prof_id: 0,
  });


  const [profs, setProfs] = useState([]);
  const [groups, setGroups] = useState([]);
  const [matiers, setMatiers] = useState([]);
  const [pop, setPop] = useState(0);
  const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

  useEffect(() => {
    fetch('http://localhost:8080/prof')
      .then((response) => response.json())
      .then((data) => {
        setProfs(data);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:8080/group')
      .then((response) => response.json())
      .then((data) => {
        setGroups(data);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:8080/matier')
      .then((response) => response.json())
      .then((data) => {
        setMatiers(data);
      });
  }, []);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    const updatedValue = name === 'matiers_id' || name === 'prof_id' ? +value : value;
    setGroup((prev) => ({
      ...prev,
      [name]: updatedValue,
    }));
  }


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedValue = name === 'duree' ? +value : value;
    setGroup((prev) => ({
      ...prev,
      [name]: updatedValue,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/group', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(group),
      });

      if (response.ok) {
        console.log('Group added successfully');
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
            <span className="font-medium">the Group has been added successfully</span>
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
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="duree">
              Duree
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="duree"
              type="duree"
              placeholder="Enter your duree"
              name="duree"
              value={group.duree}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="date">
              Date
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="date"
              type="date"
              placeholder="Enter your date"
              name="date"
              value={"" + group.date}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="group">
              Level
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="level"
              name="level"
              onChange={handleSelectChange}
            >
              <option value="0" className="text-gray-400 text-sm font-bold mb-2">Select a level</option>
              {
                levels && levels.map((level: any) => (
                  <option key={level} value={level} className="text-gray-400 text-sm font-bold mb-2">{level}</option>
                ))
              }
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="group">
              Matier
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="matier"
              name="matiers_id"
              onChange={handleSelectChange}
            >
              <option value="0" className="text-gray-400 text-sm font-bold mb-2">Select a matier</option>
              {
                matiers && matiers.map((matier: any) => (
                  <option key={matier.id} value={matier.id} className="text-gray-400 text-sm font-bold mb-2">{matier.name}</option>
                ))
              }
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="group">
              Proffisour
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="proffisour"
              name="prof_id"
              onChange={handleSelectChange}
            >
              <option value="0" className="text-gray-400 text-sm font-bold mb-2">Select a proffisour</option>
              {
                profs && profs.map((prof: any) => (
                  <option key={prof.id} value={prof.id} className="text-gray-400 text-sm font-bold mb-2">{prof.name}</option>
                ))
              }
            </select>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-gray-500 w-80 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Create Group
            </button>
          </ div>
        </form>
      </div>
    </>
  );
}

export default AddPost;
