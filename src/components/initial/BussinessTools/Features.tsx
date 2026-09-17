import {
  FileText,
  Calendar,
  Clock,
  Building2,
  ShieldCheck,
  FolderKanban,
  MessageCircle,
  Users,
  type LucideIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { ContainerCard } from "../../Container";

type FeatureCard = {
  Icon: LucideIcon;
  key: string;
};

const cards: FeatureCard[] = [
  { Icon: FileText, key: "reports" },
  { Icon: Calendar, key: "shifts" },
  { Icon: Clock, key: "remote" },
  { Icon: Building2, key: "multicompany" },
  { Icon: ShieldCheck, key: "security" },
  { Icon: FolderKanban, key: "projects" },
  { Icon: MessageCircle, key: "chat" },
  { Icon: Users, key: "clients" },
];

export default function Features() {
  const t = useTranslations("businessTools");

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {cards.map((card) => (
        <ContainerCard key={card.key}>
          <div className=" items-center justify-center flex flex-col">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-5 text-primary shrink-0">
              <card.Icon className="h-10 w-10" strokeWidth={1.75} />
            </div>
            <h3 className="text-lg font-bold text-primary mb-2">
              {t(`${card.key}.title`)}
            </h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              {t(`${card.key}.description`)}
            </p>
          </div>
        </ContainerCard>
      ))}
    </div>
  );
}
