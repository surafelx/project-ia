/* eslint-disable jsx-a11y/anchor-is-valid */
import { Badge, Button, Card, Dropdown, Table, useTheme } from "flowbite-react";
import type { FC } from "react";
import Chart from "react-apexcharts";
import "svgmap/dist/svgMap.min.css";
import NavbarSidebarLayout from "../layouts/navbar-sidebar";

("use client");

const DashboardPage: FC = function () {
  return (
    <NavbarSidebarLayout>
      <div className="px-4 pt-6">
        <div className="px-4 pt-6">
          <h1 className="mb-4  text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Companies
          </h1>
          <CompanyCard />
        </div>
        <div className="px-4 pt-6">
          <h1 className="mb-4  text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Machines
          </h1>
          <MachineCard />
        </div>
      </div>
    </NavbarSidebarLayout>
  );
};

export const MachineCard = () => {
  return (
    <Card className="max-w-sm">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Machine Name
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Machine Description
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Machine Status
      </p>
      <Button>
        Read more
        <svg
          className="-mr-1 ml-2 h-4 w-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
    </Card>
  );
};

export const CompanyCard = () => {
  return (
    <Card className="max-w-sm">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Company Name
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Company Description
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Amount of Machines
      </p>
      <Button>
        Read more
        <svg
          className="-mr-1 ml-2 h-4 w-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
    </Card>
  );
};

export default DashboardPage;
