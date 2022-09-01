import type { NextApiRequest, NextApiResponse } from "next";

type TelemetryData = {
  name?: string;
};

type TelemetryFunction = (
  req: NextApiRequest,
  res: NextApiResponse<TelemetryData>
) => Promise<void>;

export const Telemetry: TelemetryFunction = async (req, res) => {
  console.log(req.body);
  const data = await fetch("https://flext-analytics.vercel.app/api/collect", {
    method: "POST",
    body: req.body,
  });
  console.log({ data });
  res.status(200).json({ name: "John Doe" });
};

export default Telemetry;
