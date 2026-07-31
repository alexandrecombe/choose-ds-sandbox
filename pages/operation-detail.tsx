import { Badge } from "@/components/choose-ui/badge";
import { AlertBanner } from "@/components/choose-ui/alert-banner";
import { Button } from "@/components/choose-ui/button";
import { ArrowLeft } from "lucide-react";

interface OperationDetailProps {
  operation: {
    name: string;
    status: string;
  };
}

export default function OperationDetail({ operation }: OperationDetailProps) {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      {/* En-tête */}
      <header className="border-b border-border bg-background px-6 py-5">
        <div className="mb-1">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft size={16} />
            Retour aux opérations
          </button>
        </div>
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-semibold text-foreground">
            {operation.name}
          </h1>
          <Badge variant="success">{operation.status}</Badge>
        </div>
      </header>

      {/* Contenu */}
      <main className="flex-1 px-6 py-6">
        <AlertBanner
          variant="success"
          title="Facturation réglée"
          description="Le paiement de cette opération a été confirmé. Aucune action requise."
        />
      </main>

      {/* Avertissement expiration */}
      <div className="px-6 pb-4">
        <AlertBanner
          variant="warning"
          title="Expiration imminente"
          description="Cette opération expire dans 3 jours. Pensez à la valider avant l'échéance."
        />
      </div>

      {/* Zone d'actions */}
      <footer className="sticky bottom-0 border-t border-border bg-background px-6 py-4">
        <div className="flex items-center justify-end gap-3">
          <Button variant="secondary">Annuler</Button>
          <Button variant="primary">Valider l'opération</Button>
        </div>
      </footer>
    </div>
  );
}
