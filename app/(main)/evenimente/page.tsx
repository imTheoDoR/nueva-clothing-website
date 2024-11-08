import getEvents from "@/actions/admin/evenimente/get";
import EventWrapper from "@/components/evenimente/event-wrapper";

export default async function EvenimentePage() {
  const evenimente = await getEvents();

  return (
    <div className="container">
      <div className="mt-24 lg:mt-32">
        <h1 className="text-[48px] font-bold text-nueva-white max-w-[677px] text-center mx-auto capitalize leading-tight">
          Evenimente Organizate de Reyes Clothing
        </h1>
        <p className="text-[20px] text-nueva-white text-center mt-3 max-w-[770px] mx-auto">
          Bucură-te de competiții palpitante, întâlniri comunitare și activități
          recreative care îți vor oferi experiențe de neuitat. Fii parte din
          evenimentele noastre exclusive și creează amintiri alături de ceilalți
          cetățeni!
        </p>
      </div>

      <EventWrapper evenimente={evenimente} />
    </div>
  );
}
