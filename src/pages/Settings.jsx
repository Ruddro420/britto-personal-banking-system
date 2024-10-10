import SettingButton from "../component/SettingButton";
import {
  CalendarDays,
  KeyRound,
  ListChecks,
  Moon,
  UserRoundPen,
} from "lucide-react";
import ThemeButton from "../component/ThemeButton";

const Settings = () => {
  return (
    <section className="bg-gray-2 pt-[90px] dark:bg-dark lg:pb-20 lg:pt-[120px] pb-5">
      <div className="container">
        <div className="container">
          <div className="grid grid-cols-2 gap-3 dark:text-white mt-3 text-xl font-bold">
            <h1>Setting</h1>
          </div>
        </div>
        <div className="flex flex-col gap-2 py-10">
          <ThemeButton content={"Dark Mode"} icon={<Moon />} onClick={""} />

          <SettingButton
            content={"Change Password"}
            icon={<KeyRound />}
            onClick={""}
          />
          <SettingButton
            content={"Edit Profile"}
            icon={<UserRoundPen />}
            onClick={""}
          />
          <SettingButton
            content={"Calendar"}
            icon={<CalendarDays />}
            onClick={""}
          />
          <SettingButton
            content={"Payment Categories"}
            icon={<ListChecks />}
            onClick={""}
          />
        </div>
      </div>
    </section>
  );
};

export default Settings;
