import { useContext } from "react";
import { useState } from "react";
import { VotingContext } from "../reducer/VotingContext";

export default function VotingForm() {
  const [namaKan, setNamaKan] = useState("");
  const [noUrut, setNoUrut] = useState(null);
  const { dispatch } = useContext(VotingContext);

  function handleNama(e) {
    setNamaKan(e.target.value);
  }

  function handleNoUrut(e) {
    setNoUrut(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: "ADD_CANDIDATE",
      nama: namaKan,
      noUrut: noUrut,
    });
    setNamaKan("");
    setNoUrut("");
  }

  return (
    <div>
      <h2>Form Kandidat</h2>
      <form>
        <label>
          Nama Kandidat:
          <input type="text" value={namaKan} onChange={handleNama} />
        </label>
        <label>
          No Urut:
          <input type="number" value={noUrut} onChange={handleNoUrut} />
        </label>
        <button onClick={handleSubmit}>Tambahkan</button>
      </form>
    </div>
  );
}
