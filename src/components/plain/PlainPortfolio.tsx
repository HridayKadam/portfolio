import {
  collaborations,
  community,
  contact,
  earlyExperiments,
  growth,
  products,
  profile,
  ventures,
} from "@/config/content";
import {
  BracketLink,
  PlainEntry,
  PlainSection,
} from "@/components/plain/PlainDocument";

function displayName(name: string) {
  return name.toLowerCase();
}

export function PlainPortfolio() {
  const principles = profile.principles
    .map((p) => p.replace(/\.$/, "").toLowerCase())
    .join(", ");

  const bioTail = profile.bio
    .map((p) => p.replace(/\.$/, "").toLowerCase())
    .join(" ");

  const ventureNames = ventures.map((v) => v.name.toLowerCase()).join(", ");

  return (
    <div className="plain-doc flex min-h-screen flex-col">
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-6 py-16 sm:px-8 sm:py-20">
        <section>
          <h1 className="mb-6 text-3xl font-bold">{displayName(profile.name)}</h1>
          <p className="mb-6 max-w-xl text-base">
            {principles}. {bioTail} ventures include {ventureNames}.
          </p>

          <p className="mb-4 text-base">
            <BracketLink href="?device=ios" external={false}>
              hridayos
            </BracketLink>
          </p>

          <p className="mb-4 text-sm">
            find me elsewhere:{" "}
            {contact.links.map((link, i) => (
              <span key={link.id}>
                {i > 0 ? " | " : null}
                <a href={link.href}>{link.label.toLowerCase()}</a>
              </span>
            ))}
          </p>
          <p className="text-sm">
            reach out:{" "}
            <a href={contact.links[0]?.href ?? "#"}>{contact.links[0]?.subtitle ?? "x"}</a>
          </p>

          <div className="mt-10">
            <p className="mb-5 text-sm font-bold">a few things i&apos;ve done</p>
            <div className="space-y-8">
              <PlainSection title="companies">
                {ventures.map((v) => (
                  <PlainEntry
                    key={v.id}
                    title={v.name.toLowerCase()}
                    subtitle={v.role.toLowerCase()}
                    description={v.description.toLowerCase()}
                    links={
                      v.website
                        ? [{ href: v.website, label: v.name.toLowerCase() }]
                        : undefined
                    }
                  />
                ))}
              </PlainSection>

              <PlainSection title="products">
                {products.map((p) => (
                  <PlainEntry
                    key={p.id}
                    title={p.name.toLowerCase()}
                    subtitle={p.role.toLowerCase()}
                    description={p.description.toLowerCase()}
                    stat={p.stat?.toLowerCase()}
                    links={
                      p.website
                        ? [{ href: p.website, label: p.name.toLowerCase() }]
                        : undefined
                    }
                  />
                ))}
              </PlainSection>

              <PlainSection title="collaborations">
                {collaborations.map((c) => (
                  <PlainEntry
                    key={c.id}
                    title={c.name.toLowerCase()}
                    description={c.description.toLowerCase()}
                    links={
                      c.website
                        ? [{ href: c.website, label: c.name.toLowerCase() }]
                        : undefined
                    }
                  />
                ))}
              </PlainSection>

              <PlainSection title="growth & distribution">
                <PlainEntry
                  title="distribution"
                  description={`${growth.intro.toLowerCase()} ${growth.bullets.map((b) => b.toLowerCase()).join("; ")}. ${growth.footer.toLowerCase()}`}
                />
              </PlainSection>

              <PlainSection title="community">
                {community.map((c) => (
                  <PlainEntry
                    key={c.id}
                    title={c.title.toLowerCase()}
                    subtitle={c.subtitle.toLowerCase()}
                    description={c.description.toLowerCase()}
                  />
                ))}
              </PlainSection>

              <PlainSection title="early experiments">
                <PlainEntry
                  title={earlyExperiments.title.toLowerCase()}
                  description={earlyExperiments.body.toLowerCase()}
                />
              </PlainSection>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
