import { Bitski } from "bitski";

const BitskiCallback = () => {
  Bitski.callback();
  return (
    <div>
      <script src="https://cdn.jsdelivr.net/npm/bitski@0.6.0/dist/callback.js"></script>
    </div>
  );
};

export default BitskiCallback;
