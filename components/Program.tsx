import { Clock } from "lucide-react";
import { useState } from "react";

const schedule = {
  matin: [
    {
      time: "08:30 - 09:00",
      title: "Accueil & Café",
      type: "Networking",
      location: "Hall principal",
    },
    {
      time: "09:00 - 09:45",
      title: "Keynote : L'Agilité à l'ère de l'IA",
      speaker: "Sophie Martin",
      type: "Keynote",
      location: "Auditorium",
    },
    {
      time: "10:00 - 11:00",
      title: "Scrum à l'échelle : Retours d'expérience",
      speaker: "Jean Dupont",
      type: "Workshop",
      location: "Salle A",
    },
    {
      time: "11:15 - 12:15",
      title: "Design Thinking & Agilité",
      speaker: "Marie Laurent",
      type: "Workshop",
      location: "Salle B",
    },
  ],
  apresMidi: [
    {
      time: "12:15 - 13:45",
      title: "Déjeuner & Networking",
      type: "Networking",
      location: "Terrasse",
    },
    {
      time: "14:00 - 15:00",
      title: "DevOps & Culture Agile",
      speaker: "Thomas Bernard",
      type: "Workshop",
      location: "Salle A",
    },
    {
      time: "15:15 - 16:15",
      title: "Management Agile : Au-delà des frameworks",
      speaker: "Claire Dubois",
      type: "Workshop",
      location: "Salle B",
    },
    {
      time: "16:30 - 17:30",
      title: "Table ronde : L'avenir de l'Agilité",
      type: "Panel",
      location: "Auditorium",
    },
    {
      time: "17:30 - 19:00",
      title: "Cocktail de clôture",
      type: "Networking",
      location: "Terrasse",
    },
  ],
};

export function Program() {
  const [activeTab, setActiveTab] = useState<"matin" | "apresMidi">("matin");
  const allSessions = [...schedule.matin, ...schedule.apresMidi];

  return (
    <section id="programme" className="relative py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 rounded-full text-sm mb-6">
            Programme complet
          </div>
          <h2 className="text-6xl md:text-7xl tracking-tight mb-8 leading-[1.1]">
            Une journée<br />
            intense et inspirante
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Des keynotes captivantes, des workshops pratiques et des moments 
            d'échanges privilégiés pour enrichir votre pratique agile.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-16">
          <button
            onClick={() => setActiveTab("matin")}
            className={`px-8 py-4 rounded-full transition-all text-lg ${
              activeTab === "matin"
                ? "bg-black text-white"
                : "bg-white border-2 border-gray-200 hover:border-gray-300"
            }`}
          >
            Matinée
          </button>
          <button
            onClick={() => setActiveTab("apresMidi")}
            className={`px-8 py-4 rounded-full transition-all text-lg ${
              activeTab === "apresMidi"
                ? "bg-black text-white"
                : "bg-white border-2 border-gray-200 hover:border-gray-300"
            }`}
          >
            Après-midi
          </button>
        </div>

        {/* Schedule Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="space-y-4">
            {schedule[activeTab].map((session, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:scale-[1.02]"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Time */}
                  <div className="flex items-center gap-3 lg:w-48 flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl flex items-center justify-center">
                      <Clock size={20} className="text-orange-600" />
                    </div>
                    <span className="text-gray-600">{session.time}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-3">
                      <h3 className="text-2xl group-hover:text-orange-600 transition-colors">
                        {session.title}
                      </h3>
                      <span className="px-4 py-1.5 bg-gradient-to-r from-orange-50 to-red-50 text-orange-700 rounded-full text-sm w-fit">
                        {session.type}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                      {session.speaker && (
                        <span className="flex items-center gap-2">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                            <circle cx="12" cy="7" r="4"/>
                          </svg>
                          {session.speaker}
                        </span>
                      )}
                      <span className="flex items-center gap-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                          <circle cx="12" cy="10" r="3"/>
                        </svg>
                        {session.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full hover:shadow-2xl hover:scale-105 transition-all text-lg">
            Télécharger le programme complet
          </button>
        </div>
      </div>
    </section>
  );
}
