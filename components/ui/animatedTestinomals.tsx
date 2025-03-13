"use client";

import {
  IconArrowLeft,
  IconArrowRight,
  IconMapPin,
  IconPhone,
  IconBriefcase,
  IconUser,
  IconHome,
  IconRuler,
} from "@tabler/icons-react";
import { DollarSign } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
type Profile = {
  name: string;
  image: string;
  locality: string;
  age: number;
  height: string;
  kile: string;
  mobile: string;
  employment: string;
  salary: string;
  isPremium?: boolean;
};

export const AnimatedProfiles = ({
  profiles,
  autoplay = true,
}: {
  profiles: Profile[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);
  const router = useRouter();
  const handleNext = () => {
    setActive((prev) => (prev + 1) % profiles.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + profiles.length) % profiles.length);
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 10000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <div className="max-w-sm md:max-w-4xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-20 bg-gradient-to-b dark:from-neutral-950 dark:to-neutral-800">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <div className="relative h-80 w-full overflow-hidden">
            <AnimatePresence mode="wait">
              {profiles.map(
                (profile, index) =>
                  index === active && (
                    <motion.div
                      key={profile.image}
                      initial={{ opacity: 0, scale: 0.95, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -20 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="absolute inset-0"
                    >
                      {profiles[active].isPremium ? (
                        <Image
                          src={profiles[active].image}
                          alt={profiles[active].image}
                          width={500}
                          height={500}
                          draggable={false}
                          className="h-full w-full rounded-3xl object-fill object-center"
                        />
                      ) : (
                        <Image
                          src={profiles[active].image}
                          alt={profiles[active].name}
                          width={500}
                          height={500}
                          draggable={false}
                          className="h-full w-full rounded-3xl object-fill object-center blur-md"
                        />
                      )}
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <h3 className="text-2xl font-bold dark:text-white text-black">
              Name: {profiles[active].name}
            </h3>

            {profiles[active].isPremium ? (
              <div className="mt-4 space-y-2 text-gray-500 dark:text-neutral-300">
                <p className="flex items-center gap-2">
                  <IconUser className="h-5 w-5 text-gray-400" /> Age:{" "}
                  {profiles[active].age}
                </p>
                <p className="flex items-center gap-2">
                  <IconRuler className="h-5 w-5 text-gray-400" /> Height:{" "}
                  {profiles[active].height}
                </p>
                <p className="flex items-center gap-2">
                  <IconHome className="h-5 w-5 text-gray-400" /> Property:{" "}
                  {profiles[active].kile}
                </p>
                <p className="flex items-center gap-2">
                  <IconMapPin className="h-5 w-5 text-gray-400" /> Locality:{" "}
                  {profiles[active].locality}
                </p>
                <p className="flex items-center gap-2">
                  <IconBriefcase className="h-5 w-5 text-gray-400" />{" "}
                  Employment: {profiles[active].employment}
                </p>
                <p className="flex items-center gap-2">
                  <DollarSign /> Salary: {profiles[active].salary}
                </p>
                <p className="flex items-center gap-2 text-teal-500 font-bold">
                  <IconPhone className="h-5 w-5 text-gray-400" /> Mobile:{" "}
                  <a
                    href={`tel:+91${profiles[active].mobile}`}
                    className="text-blue-400 hover:underline"
                  >
                    {profiles[active].mobile}
                  </a>
                </p>
              </div>
            ) : (
              <div className="mt-4 space-y-2 text-gray-500 dark:text-neutral-500 relative p-4 rounded-lg">
                <div className="relative z-10 space-y-2">
                  <p className="flex items-center gap-2">
                    <IconUser className="h-5 w-5 text-gray-400" /> Age: ****
                  </p>
                  <p className="flex items-center gap-2">
                  <IconRuler className="h-5 w-5 text-gray-400" /> Height:{" "}
                  {profiles[active].height}
                </p>
                  <p className="flex items-center gap-2">
                    <IconHome className="h-5 w-5 text-gray-400" /> Property:
                    ****
                  </p>
                  <p className="flex items-center gap-2">
                    <IconMapPin className="h-5 w-5 text-gray-400" /> Locality:
                    ****
                  </p>
                  <p className="flex items-center gap-2">
                  <IconBriefcase className="h-5 w-5 text-gray-400" />{" "}
                  Employment: {profiles[active].employment}
                </p>
                <p className="flex items-center gap-2">
                  <DollarSign /> Salary: {profiles[active].salary}
                </p>
                  <p className="flex items-center gap-2">
                    <IconPhone className="h-5 w-5 text-gray-400" /> Mobile: ****
                  </p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-lg z-20">
                  <Button
                    variant="default"
                    className="text-white"
                    onClick={() => {
                      router.push("/buy");
                      toast("Redirecing For Subscription");
                    }}
                  >
                    🔓 Unlock Premium
                  </Button>
                </div>
              </div>
            )}
          </motion.div>

          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
            >
              <IconArrowLeft className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
            >
              <IconArrowRight className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
