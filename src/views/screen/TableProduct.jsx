import React from 'react'

const TableProduct = () => {
    let array = [{nama: "Seto", pekerjaan: "Developer"},{nama: "David", pekerjaan: "Juri"}]
    return (
        <div>
            <style>
                {"table,tr,th,td{border:2px solid black;border-collapse: collapse;}"}
            </style>
            <table>
                <thead>
                    <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Pekerjaan</th>
                    </tr>
                </thead>
                <tbody>
                    {
                      array.map((val,idx) => {
                      return (
                        <tr>  
                        <td>{idx+1}</td>
                        <td>{val.nama}</td>
                        <td>{val.pekerjaan}</td>
                        </tr>
                        )
                      })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TableProduct