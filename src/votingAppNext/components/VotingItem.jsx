import VotingAction from "./VotingAction";

export default function VotingItem({ vote }) {
  return (
    <li style={{ width: "220px", border: "1px solid", marginTop: "10px" }}>
      <h2 style={{ fontWeight: "bolder", textTransform: "uppercase" }}>
        {vote.nama}
      </h2>
      <h2 style={{ fontWeight: "lighter" }}> No Urut: {vote.noUrut}</h2>
      <div style={{ border: "1px solid" }}>
        <p style={{ fontWeight: "lighter" }}>Jumlah Suara:{vote.jumSuara}</p>
        <VotingAction vote={vote} />
      </div>
    </li>
  );
}
